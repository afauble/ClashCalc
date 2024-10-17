<script setup lang="ts">
    import { getBuildingMapKeys } from '@/data/dataMap';
    import BuildingCard from '@/components/custom/BuildingCard.vue';
    import { ScrollArea } from '@/components/ui/scroll-area';
    import { Separator } from '@/components/ui/separator';
    import EquipCard from '@/components/custom/EquipCard.vue';

    let buildingNames: string[] = getBuildingMapKeys();
</script>

<template>
    <div>
        <div class="flex w-screen items-center justify-center gap-10 py-5">
            <EquipCard equipName="Lightning"></EquipCard>
            <EquipCard equipName="Earthquake"></EquipCard>
            <EquipCard equipName="Giant Arrow"></EquipCard>
            <EquipCard equipName="Fireball"></EquipCard>
        </div>
        

        <Separator class="mt-4"></Separator>

        <ScrollArea class=" h-[calc(100vh-330px)] w-screen px-12 pt-0">
            <!-- Added to create padding on the top -->
            <div class="h-6"></div>

            <div class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                <BuildingCard v-for="(buidlingName, index) in buildingNames" :key=index :buildingName=buidlingName></BuildingCard>
            </div>

            <!-- Added to create padding on the bottom -->
            <div class="h-6"></div>       
        </ScrollArea>
    </div>
    
</template>

<style scoped>
</style>