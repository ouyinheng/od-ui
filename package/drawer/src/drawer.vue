<template>
	<div class="od-drawer">
		<div v-if="drawerVisibility" class="modelColor" @click="cancel"></div>
        <transition :name="transition" mode="out-in">
            <div class="search-drawer" v-if="drawerVisibility" @click="cancel">
                <div class="drawer-section" @click.stop="">
                    <slot name="content"></slot>
                </div>
                <div class="drawer-footer" @click.stop="">
                    <slot name="footer"></slot>
                </div>
           </div>
       </transition>
	</div>
</template>

<script>
import './drawer.scss';
export default {
	name: 'od-drawer',
	props: {
		value: {
			type: Boolean,
			default: false
		}
	},
	watch: {
		value(val) {
			this.drawerVisibility = val;
		}
	},
	data() {
		return {
			transition: 'page-transfer',
			drawerVisibility: false
		}
	},
	methods: {
        cancel() {
			this.drawerVisibility = !this.drawerVisibility;
			this.$emit('input', this.drawerVisibility) 
        }
	},
	created() {
		console.log(this.value)
	}
}
</script>