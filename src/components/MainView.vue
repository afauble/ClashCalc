<script setup lang="ts">
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button';
import EquipQuakeTab from '@/components/pages/EquipQuakeTab.vue';
</script>

<template>

    <header class="fixed top-0 left-0 right-0 flex border-b border-gray-500 items-center justify-between pl-4 pr-6 h-14 sm:h-16 lg:px-24">
        <div class="flex font-bold items-center">
            ClashCalc
        </div>
        <div class="flex items-center">
            <Button class="h-8">Donate</Button>
        </div>
    </header>

    <div class="flex justify-center fixed top-16">
        <Tabs default-value="equipquake" class="w-screen">
            <TabsList>
                <TabsTrigger value="equipquake">
                    EquipQuake
                </TabsTrigger>
                <TabsTrigger value="spearsnipe">
                    Spear Snipe
                </TabsTrigger>
                <TabsTrigger value="healerwalk">
                    Healer Walk
                </TabsTrigger>
            </TabsList>
            <TabsContent value="equipquake">
                <EquipQuakeTab></EquipQuakeTab>
            </TabsContent>
            <TabsContent value="spearsnipe">
                How many spear strikes to destroy a building.
            </TabsContent>
            <TabsContent value="healerwalk">
                Comparing damage of buildings to healing from troops.
            </TabsContent>
        </Tabs>
    </div>
</template>

<style scoped>
</style>