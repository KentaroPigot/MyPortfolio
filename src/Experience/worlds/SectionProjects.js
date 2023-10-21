import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Ressources from "../utils/Ressources";
import * as dat from "lil-gui";

export default class SceneInit {
  constructor(canvas) {
    this.scene = new THREE.Scene();
    this.canvas = canvas;
    this.sizes = { width: window.innerWidth, height: window.innerHeight }; // Corrected the sizes object
    this.group = new THREE.Group();
    this.group.position.set(0.75, -2.1, 7.2);
    this.group.rotation.reorder("YXZ");
    this.group.rotation.y = -0.928;
    this.group.rotation.x = -0.104;
    this.group.rotation.z = -0.207;
    this.scene.add(this.group);

    // this.gui = new dat.GUI();

    // this.gui.add(this.group.position, "x").min(-50).max(50).step(0.001);
    // this.gui.add(this.group.position, "y").min(-50).max(50).step(0.001);
    // this.gui.add(this.group.position, "z").min(-50).max(50).step(0.001);
    // this.gui
    //   .add(this.group.rotation, "x")
    //   .min(-Math.PI * 2)
    //   .max(Math.PI * 2)
    //   .step(0.001);
    // this.gui
    //   .add(this.group.rotation, "y")
    //   .min(-Math.PI * 2)
    //   .max(Math.PI * 2)
    //   .step(0.001);
    // this.gui
    //   .add(this.group.rotation, "z")
    //   .min(-Math.PI * 2)
    //   .max(Math.PI * 2)
    //   .step(0.001);

    this.textureLoader = new THREE.TextureLoader();
    this.gltfLoader = new GLTFLoader();

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setClearColor(0xffffff, 1);

    this.mouse = new THREE.Vector2(0, 0);

    this.clock = new THREE.Clock();

    // const aspect = this.sizes.width / this.sizes.height;
    this.camera = new THREE.PerspectiveCamera(
      45,
      this.sizes.width / this.sizes.height,
      0.1,
      100
    );

    this.camera.position.set(0, 0, 10);
    this.scene.add(this.camera);

    // this.controls = new OrbitControls(this.camera, this.canvas);
    // this.controls.enableDamping = true;
    this.time = 0;

    this.setLight();
    this.setObjects();
    this.resize();
    this.render();
    this.setupResize();
  }

  setLight() {
    this.ambientLight = new THREE.AmbientLight("ffffff", 2);
    // this.gui.add(this.ambientLight.position, "x").min(-10).max(10).step(0.001);
    this.scene.add(this.ambientLight);

    this.directionalLight = new THREE.DirectionalLight("ffffff", 1);
    this.directionalLight.position.set(5.493, 3.772, 4.51);
    this.scene.add(this.directionalLight);

    // this.gui
    //   .add(this.directionalLight.position, "x")
    //   .min(-10)
    //   .max(10)
    //   .step(0.001);
    // this.gui
    //   .add(this.directionalLight.position, "y")
    //   .min(-10)
    //   .max(10)
    //   .step(0.001);
    // this.gui
    //   .add(this.directionalLight.position, "z")
    //   .min(-10)
    //   .max(10)
    //   .step(0.001);

    // const dirHelper = new THREE.DirectionalLightHelper(this.directionalLight);
    // this.scene.add(dirHelper);
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

  setObjects() {
    this.laptopModel = this.gltfLoader.load("gltf/laptop.glb", (gltf) => {
      console.log(gltf);
      this.mesh = gltf.scene.children[0];
      this.mesh.scale.set(0.2, 0.2, 0.2);

      this.group.add(this.mesh);

      //   this.gui.add(this.mesh.position, "x").min(-50).max(50).step(0.001);
      //   this.gui.add(this.mesh.position, "y").min(-50).max(50).step(0.001);
      //   this.gui.add(this.mesh.position, "z").min(-50).max(50).step(0.001);
      //   this.gui
      //     .add(this.mesh.rotation, "x")
      //     .min(0)
      //     .max(Math.PI * 2)
      //     .step(0.001);
      //   this.gui
      //     .add(this.mesh.rotation, "y")
      //     .min(0)
      //     .max(Math.PI * 2)
      //     .step(0.001);
    });
    this.picGeometry = new THREE.PlaneGeometry(5.885, 3.4075, 1, 1, 1);
    this.picMaterial = new THREE.MeshBasicMaterial({ color: "red" });
    this.project1 = new THREE.Mesh(this.picGeometry, this.picMaterial);
    this.project1.position.set(0, 2.134, -2.134);
    this.group.add(this.project1);

    // this.gui
    //   .add(mesh.position, "x")
    //   .min(-10)
    //   .max(10)
    //   .step(0.001)
    //   .name("positionX");
    // this.gui
    //   .add(this.project2.position, "z")
    //   .min(-10)
    //   .max(10)
    //   .step(0.001)
    //   .name("positionY");
    // this.gui
    //   .add(mesh.position, "z")
    //   .min(-10)
    //   .max(10)
    //   .step(0.001)
    //   .name("positionZ");
    // this.gui.add(mesh.scale, "x").min(-10).max(10).step(0.001).name("scaleX");
    // this.gui.add(mesh.scale, "y").min(-10).max(10).step(0.001).name("scaleY");
  }

  render() {
    this.elapsedTime = this.clock.getElapsedTime();

    // this.controls.update();
    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.render.bind(this));
  }

  //   dispose() {
  //     this.scene.traverse((child) => {
  //       if (child instanceof THREE.Mesh && child !== this.mainMesh) {
  //         child.geometry.dispose();

  //         for (const key in child.material) {
  //           const value = child.material[key];

  //           // Test if there is a dispose function
  //           if (value && typeof value.dispose === "function") {
  //             value.dispose();
  //           }
  //         }
  //       }
  //     });
  //   }
}
