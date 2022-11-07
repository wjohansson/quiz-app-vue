<template>
    <svg viewBox="120 0 100 200" class="left-0 absolute w-[250px] top-[250px]">
        <path ref="leftBlob" id="left-blob" d="" :fill="color"></path>
    </svg>

    <svg viewBox="-20 0 100 200" class="right-0 absolute w-[275px] top-[100px]">
        <path ref="rightBlob" id="right-blob" d="" :fill="color"></path>
    </svg>
</template>

<script>
import { spline } from "@georgedoescode/spline";
import { createNoise2D } from "simplex-noise";

export default {
    props: {
        displayAnswer: Boolean,
    },
    data() {
        return {
            color: "#7678ED"
        }
    },
    watch: {
        displayAnswer() {
            if (this.displayAnswer) {
                this.color = "#FFFFFF"
            }
            if (!this.displayAnswer) {
                this.color = "#7678ED"
            }
        }
    },
    mounted() {
        const leftBlob = document.getElementById("left-blob");
        const rightBlob = document.getElementById("right-blob");

        function createPoints() {
            const points = [];
            const numPoints = 8;
            const angleStep = (Math.PI * 2) / numPoints;
            const rad = 90;

            for (let i = 1; i <= numPoints; i++) {
                const theta = i * angleStep;

                const x = 100 + Math.cos(theta) * rad;
                const y = 100 + Math.sin(theta) * rad;

                points.push({
                    x: x,
                    y: y,
                    originX: x,
                    originY: y,
                    noiseOffsetX: Math.random() * 1000,
                    noiseOffsetY: Math.random() * 1000,
                });
            }
            return points;
        }

        const points = createPoints();

        function map(n, start1, end1, start2, end2) {
            return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
        }

        const simplex = new createNoise2D();

        let noiseStep = 0.001;

        function noise(x, y) {
            return simplex(x, y);
        }

        (function animate() {
            leftBlob.setAttribute("d", spline(points, 1, true));
            rightBlob.setAttribute("d", spline(points, 1, true));

            requestAnimationFrame(animate);

            for (let i = 0; i < points.length; i++) {
                const point = points[i];

                const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
                const nY = noise(point.noiseOffsetY, point.noiseOffsetY);

                const x = map(
                    nX,
                    -1,
                    1,
                    point.originX - 10,
                    point.originX + 10
                );
                const y = map(
                    nY,
                    -1,
                    1,
                    point.originY - 20,
                    point.originY + 20
                );

                point.x = x;
                point.y = y;

                point.noiseOffsetX += noiseStep;
                point.noiseOffsetY += noiseStep;
            }
        })();
    },
};
</script>

<style></style>
