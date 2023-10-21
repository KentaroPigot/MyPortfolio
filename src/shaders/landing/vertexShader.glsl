uniform float uIntensity;
varying vec2 vUv;

        void main()
        {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);

          modelPosition.x *= 1.0 + uIntensity * distance(vec2(modelPosition.xy), vec2(0.0)) * 1.5;

          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectedPosition = projectionMatrix * viewPosition;

          gl_Position = projectedPosition;
            vUv = uv;
        }