<template>
    <v-app class="pa-6">
        <Header />
        <Sidebar />
        <v-main class="content">
            <router-view />
            <Footer />
        </v-main>
    </v-app>
</template>

<script>
    import Header from '@/components/Header/Header';
    import Sidebar from '@/components/Sidebar/Sidebar';
    import Footer from "@/components/Footer/Footer";
    import './Layout.scss';

    import { mapActions } from "vuex";

    export default {
        name: 'Layout',
        components: {Footer, Header, Sidebar },
        methods: {
            ...mapActions("auth", ["check"]),
        },
        created() {
            this.check();
        }
    };
</script>

<style src="./Layout.scss" lang="scss" />
