<template>
	<div>
		<svg :width="width" :height="height" :style="{
			stroke: stroke
		}" >
			<defs>
				<line x1="10" y1="10" x2="22" y2="22" fill="red"></line>
				<line x1="10" y1="22" x2="22" y2="10" fill="red"></line>
				<line x1="0" y1="6" x2="12" y2="6"></line>
				<line x1="6" y1="0" x2="6" y2="12"></line>
				<ellipse cx="83" cy="83" rx="40" ry="40"></ellipse>
				<g id="download">
					<path d="
						M 18 3
						L 46 3
						L 46 40
						L 61 40
						L 32 68
						L 3 40
						L 18 40
						Z
					">
						<animateMotion path="M50,125 C 100,25 150,225, 200, 125" dur="4s" fill="freeze"/>
					</path>
				</g>
			</defs>
			<symbol id="downloads" viewBox="0 0 1030 1030">
				<path d="
					M512 32c265.104 0 480 214.896 480 480s-214.896 480-480 480S32 777.104 32 512 246.896 32 512 32z m277.056 305.472a48 48 0 0 0-67.584-6.528L411.104 586.88 310.544 451.52a48 48 0 0 0-77.088 57.264l130.704 175.872a48 48 0 0 0 69.072 8.448l349.296-288a48 48 0 0 0 6.528-67.584z" fill="green" p-id="1961">
				</path>
			</symbol>
			<use href="#downloads" x="100" y="100" width="100" height="100"></use>
			<use href="#download" x="100" y="100" width="100" height="100"></use>
		</svg>
	</div>
</template>

<script>
import rightSvg from './right.svg';
export default {
	name: 'od-svger',
	props: {
		width: {
			type: Number,
			default: 520
		},
		height: {
			type: Number,
			default: 520
		},
		stroke: {
			type: String,
			default : 'green'
		}
	},
	data: () => ({
		rightSvg
	})
}
</script>

<style lang="scss" scoped>
svg {
  stroke-width: 1;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}
</style>