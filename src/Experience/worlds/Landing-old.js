import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { gsap } from "gsap";
import vertexShader from "../../shaders/landingImages/vertexShader.glsl";
import fragmentShader from "../../shaders/landingImages/fragmentShader.glsl";
import Ressources from "../utils/Ressources.js";
import sources from "../sources.js";
import TitleAppears from "../gsap/TitleAppears.js";
import brush from "../../../static/textures/ripples/brush.png";

export default class SceneInit {
  constructor(canvas) {
    this.scenePostProcess = new THREE.Scene();
    this.canvas = canvas;
    this.margin = 0.1;
    this.sizes = { width: window.innerWidth, height: window.innerHeight };
    this.sources = sources;
    this.resources = new Ressources(this.sources);
    this.geometry = new THREE.PlaneGeometry(1, 1.5, 30, 30);
    this.materials = [];
    this.mainMesh = null;
    this.titleAppears = new TitleAppears();
    this.raycaster = new THREE.Raycaster();

    // this.mouseOnMainMesh = new THREE.Vector2(0, 0);

    this.clock = new THREE.Clock();

    this.mouse = new THREE.Vector2(0, 0);
    this.prevMouse = new THREE.Vector2(0, 0);
    this.currentWave = 0;

    window.addEventListener("resize", () => this.onWindowResize());

    this.initScene();

    this.resources.on("ready", () => {
      // Setup
      this.createMeshs(this.group1);
      this.createMeshs(this.group2);
      this.createMeshs(this.group3);

      this.addGroupsToScene();
      this.animate();

      this.mouseEvent();
      // this.scene.traverse((child) => console.log(child));
    });
    this.addBrush();

    this.tick();
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.sizes.width / this.sizes.height,
      0.1,
      100
    );
    // this.camera = new THREE.OrthographicCamera(-2, 2, 2, -2, -1000, 1000);
    this.camera.position.z = 1.5;

    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enableDamping = true;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
    });
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0);
    this.render();

    //if window resizes

    this.group1 = new THREE.Group();
    this.group1.position.x = -1.4;
    this.group2 = new THREE.Group();
    this.group3 = new THREE.Group();
    this.group3.position.x = +1.4;
  }

  addGroupsToScene() {
    this.scene.add(this.group1);
    this.scene.add(this.group2);
    this.scene.add(this.group3);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.sizes.width = window.innerWidth;
    this.sizes.height = window.innerHeight;

    // Update camera
    this.camera.aspect = this.sizes.width / this.sizes.height;
    this.camera.updateProjectionMatrix();

    // Update renderer
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  addBrush() {
    this.brushRenderTarget = new THREE.WebGLRenderTarget(
      this.sizes.width,
      this.sizes.height
    );

    this.maxBrush = 50;
    this.brushMeshes = [];

    this.brushGeometry = new THREE.PlaneGeometry(0.1, 0.1, 1, 1);

    for (let i = 0; i < this.maxBrush; i++) {
      let m = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(brush),
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthTest: false,
        depthWrite: false,
      });

      let mesh = new THREE.Mesh(this.brushGeometry, m);
      // mesh.scale.set(0.2, 0.2, 0.2); // Set the initial scale here
      mesh.rotation.z = 2 * Math.PI * Math.random();
      mesh.visible = false;
      this.scenePostProcess.add(mesh);
      this.brushMeshes.push(mesh);
    }
  }

  createMeshs(group) {
    const textures = Object.values(this.resources.items);
    // console.log(textures);
    textures.forEach((texture, i) => {
      // const material = new THREE.MeshBasicMaterial({
      //   map: texture,
      // });
      const material = new THREE.ShaderMaterial({
        uniforms: {
          uTexture: { value: texture },
          uIntensity: { value: 0 },
          uBlackWhiteIntensity: { value: 1.0 },
          uDisplacement: { value: this.brushRenderTarget.texture },
        },
        // wireframe: true,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        transparent: true,
      });

      this.materials.push(material);

      const mesh = new THREE.Mesh(
        this.geometry,
        new THREE.MeshBasicMaterial({ color: "grey" })
      );
      if (group === this.group1) {
        mesh.position.y = 0 + (1.5 + this.margin) * i;
      } else if (group === this.group2) {
        if (i === 4) {
          this.mainMesh = mesh;
        }
        mesh.position.y = 0 - (1.5 + this.margin) * i;
      } else if (group === this.group3) {
        mesh.position.y = 0 + (1.5 + this.margin) * i;
      }
      group.add(mesh);
    });
  }

  animate() {
    gsap.to(this.group1.position, {
      duration: 2,
      y: "-=11",
      ease: "power1.inOut",
    });
    gsap.to(this.group2.position, {
      duration: 2,
      y: "+=6.4",
      ease: "power1.inOut",
    });
    gsap.to(this.group3.position, {
      duration: 2,
      y: "-=11",
      ease: "power1.inOut",
    });

    const materials = this.materials.map(
      (material) => material.uniforms.uIntensity
    );
    const materialsBlack = this.materials.map(
      (material) => material.uniforms.uBlackWhiteIntensity
    );

    const tl = gsap.timeline();
    tl.addLabel("start")
      .to(materials, {
        duration: 1,
        value: 0.3,
        ease: "power1.in",
      })
      .to(materials, {
        duration: 1,
        value: 0,
        // ease: "power3.out",
      })
      .addLabel("zoom")
      .to(
        this.camera.position,
        { duration: 1, z: 1.1, ease: "power2.inOut" },
        "zoom-=0.4"
      )
      .to(this.mainMesh.scale, {
        duration: 1,
        x: 3.25,
        y: 1.15,
      })
      .to(
        materialsBlack,
        {
          duration: 1,
          value: 0.0,
          ease: "power2.inOut",
          onComplete: () => {
            this.titleAppears.animate();
            document.documentElement.classList.remove("lock-scroll");
            this.dispose();
          },
        },
        "zoom-=0.4"
      );
  }

  mouseEvent() {
    window.addEventListener("mousemove", (e) => {
      // Get the mouse position (normalized) from the event
      const position = {};
      position.x = (e.clientX / this.sizes.width) * 2 - 1;
      position.y =
        -(
          (e.clientY + document.documentElement.scrollTop) /
          this.sizes.height
        ) *
          2 +
        1;

      this.raycaster.setFromCamera(position, this.camera);

      const intersect = this.raycaster.intersectObject(this.mainMesh);

      if (intersect[0]) {
        this.mouse.x = intersect[0].point.x;
        this.mouse.y = intersect[0].point.y;
        console.log(this.mouse);
      } else {
        this.mouse.x = null;
        this.mouse.y = null;
      }
    });
  }

  setNewWave(x, y, index) {
    // console.log(x, y, index);
    let mesh = this.brushMeshes[index];
    mesh.visible = true;
    mesh.position.x = x;
    mesh.position.y = y;
    mesh.scale.x = mesh.scale.y = 1;
    mesh.material.opacity = 0.5;
  }

  trackMousePosition() {
    if (
      Math.abs(this.mouse.x - this.prevMouse.x) < 0.1 &&
      Math.abs(this.mouse.y - this.prevMouse.y) < 0.1
    ) {
      // Nothing
    } else {
      this.currentWave = (this.currentWave + 1) % this.maxBrush;
      this.setNewWave(this.mouse.x, this.mouse.y, this.currentWave);
      this.prevMouse.x = this.mouse.x;
      this.prevMouse.y = this.mouse.y;
    }
  }

  tick() {
    this.elapsedTime = this.clock.getElapsedTime();
    this.trackMousePosition();

    // console.log(this.mouse);

    // Update controls
    this.controls.update();

    // Render
    this.renderer.setRenderTarget(this.brushRenderTarget);
    this.renderer.render(this.scenePostProcess, this.camera);
    this.renderer.setRenderTarget(null);

    // Clear the renderer before rendering the main scene
    this.renderer.clear();

    // Render the main scene (including the main mesh with the displacement effect)
    this.renderer.render(this.scene, this.camera);

    this.brushMeshes.forEach((mesh) => {
      if (mesh.visible) {
        mesh.rotation.z = 1 * this.elapsedTime;
        mesh.material.opacity -= this.elapsedTime % 0.005;
        mesh.scale.x = 0.98 * mesh.scale.x + 0.18;
        mesh.scale.y = mesh.scale.x;
        if (mesh.material.opacity < 0.02) {
          mesh.visible = false;
        }
      }
    });

    window.requestAnimationFrame(this.tick.bind(this));
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

// // INSTALLER ET TOUT FOUTRE EN SASS !!!!!
// // Trouver une ou des autres polices

// // Rendre l'image final carrée
// // Placer tous les overflow (trouver une solution pour le g qui dépasse en bas)
// // Séparer les titres en pleins de span, que l'on stagger ensuite pour les faire apparaitre du haut
// // Mettre pleins de photos en noir et blanc
// // Récupérer d'une manière ou d'une autre l'image final pour pouvoir la manipuler
// // L'image final récupère ses couleurs en zoomant
// // Effet d'aristide benoist
// // Puis un autre effet de shader et que du blabla ensuite et quelques animations sympas.

// // Peut etre un autre truc interactif stylé au milieu

// // Supprimer tous les mesh qui sortent de l'écran à la fin
