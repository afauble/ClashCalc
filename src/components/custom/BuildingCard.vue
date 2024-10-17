<script setup lang="ts">
    import { getBuildingHealth, getBuildingMaxLevel } from '@/data/dataMap'
    import { NumberField, NumberFieldContent, NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput } from '@/components/ui/number-field'
    import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card"
    import { computed, ref } from 'vue';

    const props = defineProps({
        buildingName: {
            type: String,
            required: true,
        }
    })

    const buildingMaxLvl = getBuildingMaxLevel(props.buildingName)
    const buildingLevel = ref<number>(buildingMaxLvl);
    const buildingHealth = computed(() => {
        return getBuildingHealth(props.buildingName, buildingLevel.value);
    })

</script>

<template>
    <Card class="w-[290px]">
        <CardHeader>
            <CardTitle>{{ props.buildingName }}</CardTitle>
            <CardDescription>{{ buildingHealth }}</CardDescription>
        </CardHeader>
        <CardContent class="flex justify-center">
            <NumberField v-model.number="buildingLevel" :max="buildingMaxLvl" :min="1" class="w-36">
                <NumberFieldContent>
                    <NumberFieldDecrement />
                    <NumberFieldInput />
                    <NumberFieldIncrement />
                </NumberFieldContent>
            </NumberField>
        </CardContent>
    </Card>
</template>

<style scoped>
</style>