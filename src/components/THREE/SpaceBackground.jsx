import React, { useEffect, useRef } from 'react'
import * as THREE from 'three';
export default function SpaceBackground() {

    const sceneRef = useRef();

    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, sizes.width/sizes.height, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer();

        camera.position.z = 1;
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(2)
        sceneRef.current.appendChild(renderer.domElement);

        renderer.setSize(window.innerWidth, window.innerHeight);

        //creating  stars
        const vertices = [];

        for ( let i = 0; i < 10000; i ++ ) {
            const x = THREE.MathUtils.randFloatSpread( 1500 );
            const y = THREE.MathUtils.randFloatSpread( 1500 );
            const z = THREE.MathUtils.randFloatSpread( 1500 );
        
            vertices.push( x, y, z );
        }
        
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
        const material = new THREE.PointsMaterial( { color: 0x888888 } );
        const points = new THREE.Points( geometry, material );
        scene.add(points);
        
        function animate() {
            points.rotation.x += 0.001
            points.rotation.y += 0.001

            renderer.render(scene, camera);
            requestAnimationFrame(animate)
        }
        animate();

    })

   return <div ref={sceneRef} />;
}
