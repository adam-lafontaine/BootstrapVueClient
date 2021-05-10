<style lang="scss"></style>

<template>
    <div class="text-center my-3">
        <b-button
            @click="load_test_data"
            >
            Load
        </b-button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { component } from 'vue/types/umd';

@Component({components: {}})
export default class Test extends Vue
{

    private load_test_data(): void
    {
        alert("load");
    }
}
</script>
