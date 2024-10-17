<script setup lang="ts">
    import { getEquipmentDmg, getEquipmentMaxLevel } from '@/data/dataMap'
    import { NumberField, NumberFieldContent, NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput } from '@/components/ui/number-field'
    import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card"
    import { computed, ref } from 'vue';

    const props = defineProps({
        equipName: {
            type: String,
            required: true,
        }
    })

    const equipMaxLvl = getEquipmentMaxLevel(props.equipName)
    const equipLevel = ref<number>(equipMaxLvl);
    const equipDmg = computed(() => {
        return getEquipmentDmg(props.equipName, equipLevel.value);
    })
</script>

<template>
    <Card class="w-[200px]">
        <CardHeader>
            <CardTitle>{{ props.equipName }}</CardTitle>
            <CardDescription>{{ equipDmg }}</CardDescription>
        </CardHeader>
        <CardContent class="flex justify-center">
            <NumberField v-model.number="equipLevel" :max="equipMaxLvl" :min="1" class="w-36">
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