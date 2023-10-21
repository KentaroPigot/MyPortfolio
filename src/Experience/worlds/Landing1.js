import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import vertex from "../../shaders/landing/vertexShader.glsl";
import fragment from "../../shaders/landing/fragmentShader.glsl";
import brush from "../../../static/textures/ripples/brush.png";

export default class SceneInit {
  constructor(canvas) {
    this.scene = new THREE.Scene();
    this.scene1 = new THREE.Scene();
    this.canvas = canvas;
    this.sizes = { width: window.innerWidth, height: window.innerHeight }; // Corrected the sizes object

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setClearColor(0x000000, 1);

    this.mouse = new THREE.Vector2(0, 0);
    this.prevMouse = new THREE.Vector2(0, 0);

    this.currentWave = 0;

    this.clock = new THREE.Clock();

    const aspect = this.sizes.width / this.sizes.height;
    const frustumSize = this.sizes.height;
    this.camera = new THREE.OrthographicCamera(
      (frustumSize * aspect) / -2,
      (frustumSize * aspect) / 2,
      frustumSize / 2,
      frustumSize / -2,
      -1000,
      1000
    );

    this.baseTexture = new THREE.WebGLRenderTarget(
      this.sizes.width,
      this.sizes.height
    );

    this.camera.position.set(0, 0, 2);
    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enableDamping = true;
    this.time = 0;

    this.mouseEvents();
    this.addObjects();
    this.resize();
    this.render();
    this.setupResize();
    // this.firstTransition = new firstTransition();
    // window.addEventListener("mousedown", () => {
    //   this.firstTransition.animate(this.material.uniforms.uIntensity.value);
    // });
  }

  setupResize() {
    window.addEventListener("resize", () => this.resize());
  }

  resize() {
    this.sizes.width = window.innerWidth;
    this.sizes.height = window.innerHeight;

    this.camera.aspect = this.sizes.width / this.sizes.height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  mouseEvents() {
    window.addEventListener("mousemove", (e) => {
      this.mouse.x = e.clientX - this.sizes.width / 2;
      this.mouse.y = this.sizes.height / 2 - e.clientY;
    });
  }

  addObjects() {
    this.material = new THREE.ShaderMaterial({
      //   extensions: {
      //     derivatives: "#extension GL_DES_standard_derivatives : enable",
      //   },
      uniforms: {
        uTime: { value: 0 },
        uDisplacement: { value: null },
        // resolution: { value: new THREE.Vector4() },
        uIntensity: { value: 0 },
      },
      vertexShader: vertex,
      fragmentShader: fragment,
    });
    // this.material = new THREE.MeshBasicMaterial({ color: "red" });

    this.max = 50;

    this.geometry = new THREE.PlaneGeometry(300, 300, 1, 1);
    this.geometryFullScreen = new THREE.PlaneGeometry(
      this.sizes.width,
      this.sizes.height,
      1,
      1
    );
    this.meshes = [];

    for (let i = 0; i < this.max; i++) {
      let m = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(brush),
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthTest: false,
        depthWrite: false,
      });

      let mesh = new THREE.Mesh(this.geometry, m);
      mesh.visible = false;

      mesh.rotation.z = 2 * Math.PI * Math.random();
      this.scene.add(mesh);
      this.meshes.push(mesh);
    }

    this.quad = new THREE.Mesh(this.geometryFullScreen, this.material);
    this.scene1.add(this.quad);
  }

  setNewWave(x, y, index) {
    let mesh = this.meshes[index];
    mesh.visible = true;
    mesh.position.x = x;
    mesh.position.y = y;
    mesh.scale.x = mesh.scale.y = 1;
    mesh.material.opacity = 0.5;
  }

  trackMousePos() {
    if (
      Math.abs(this.mouse.x - this.prevMouse.x) < 4 &&
      Math.abs(this.mouse.y - this.prevMouse.y) < 4
    ) {
      //Nothing
    } else {
      this.setNewWave(this.mouse.x, this.mouse.y, this.currentWave);
      this.currentWave = (this.currentWave + 1) % this.max;

      this.prevMouse.x = this.mouse.x;
      this.prevMouse.y = this.mouse.y;
    }
  }

  render() {
    this.elapsedTime = this.clock.getElapsedTime();
    this.material.uniforms.uTime.value = this.elapsedTime;

    this.trackMousePos();

    window.requestAnimationFrame(this.render.bind(this));
    this.controls.update();
    this.renderer.render(this.scene1, this.camera);

    this.renderer.setRenderTarget(this.baseTexture);
    this.renderer.render(this.scene, this.camera);
    this.material.uniforms.uDisplacement.value = this.baseTexture.texture;
    this.renderer.setRenderTarget(null);
    this.renderer.clear();
    this.renderer.render(this.scene1, this.camera);

    this.meshes.forEach((mesh) => {
      if (mesh.visible) {
        //   mesh.position.x = this.mouse.x;
        //   mesh.position.y = this.mouse.y;
        mesh.rotation.z += 0.02;
        mesh.material.opacity *= 0.96;

        mesh.scale.x = 0.98 * mesh.scale.x + 0.1;
        mesh.scale.y = mesh.scale.x;
        if (mesh.material.opacity < 0.02) {
          mesh.visible = false;
        }
      }
    });
  }

  dispose() {
    this.scene.traverse((child) => {
      if (child instanceof THREE.Mesh && child !== this.mainMesh) {
        child.geometry.dispose();

        for (const key in child.material) {
          const value = child.material[key];

          // Test if there is a dispose function
          if (value && typeof value.dispose === "function") {
            value.dispose();
          }
        }
      }
    });
  }
}
