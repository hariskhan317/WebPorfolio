import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { gsap } from "gsap";

const Ball = () => {
    // creating a refereence to a dom element which we will use to attach three
    const sceneRef = useRef(); 

    useEffect(() => {
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }
        const scene = new THREE.Scene();
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 1000);
        
        renderer.setClearColor(0x000000, 0);

        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(2)
        sceneRef.current.appendChild(renderer.domElement);

        const geometry = new THREE.SphereGeometry(2, 64, 64);
        const material = new THREE.MeshStandardMaterial({
            color: 0x0ea5e9,
            roughness: 0.2,
        })
        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh);

        camera.position.z = 15;

        // Add directional light with shadows
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
        directionalLight.position.set(1, 10, 10);
        directionalLight.castShadow = true;

        // orbit controls
        const orbitControls = new OrbitControls(camera, renderer.domElement);
        orbitControls.enableDamping = true;
        orbitControls.enablePan = false; 
        orbitControls.enableZoom = false; 
        orbitControls.autoRotate = true;
        orbitControls.autoRotateSpeed = 10

        // Add light to the scene
        scene.add(directionalLight);

        window.addEventListener("resize", () => {
            sizes.width = window.innerWidth;
            sizes.height = window.innerHeight;
            camera.aspect = sizes.width / sizes.height;
            renderer.setSize(sizes.width, sizes.height);
            camera.updateProjectionMatrix();
        })

        const loop = () => {
            orbitControls.update();
            renderer.render(scene, camera)
            window.requestAnimationFrame(loop);
        }

        loop();

        // color Animation
        let mouseDown = false;
        // empty array gonna have only 3 values
        let rgb = [];
        window.addEventListener('mousedown', () => (mouseDown = true))
        window.addEventListener('mouseup', () => (mouseDown = false))
        
        window.addEventListener('mousemove', (event) => {
            if (mouseDown) {
                rgb = [
                    Math.round((event.pageX / sizes.width) * 255),
                    Math.round((event.pageY / sizes.height) * 255),
                    150,
                ]
                console.log(rgb)
                //lets animate
                let newColor = new THREE.Color(`rgb(${rgb.join(",")})`)
                gsap.to(mesh.material.color, {
                    r: newColor.r,
                    g: newColor.g,
                    b: newColor.b,
                })
            }
        })


    }, [])

    return <div ref={sceneRef} />;
}

export default Ball;
