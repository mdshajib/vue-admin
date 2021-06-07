<template>
    <div>
        <Header />
        <Sidebar />
        <router-view />
    </div>
</template>

<script>
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
export default {
    name: 'Layout',
    components: {Header, Sidebar },
}
</script>