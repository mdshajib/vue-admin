<template>
    <v-app id="inspire">
        <v-navigation-drawer
            v-model="drawer"
            app
            style="background:#1b1119"
            dark
        >
            <v-list-item class="px-2" style="background:#d2009b">
                <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>Shajib Hasan</v-list-item-title>
                    <v-list-item-subtitle>Logged In</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>

            <v-list rounded>
                <v-list-item-group
                    v-model="selectedItem"
                    color="primary"
                    >
                    <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    :to="item.link"
                    link
                    >
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
            <template v-slot:append>
                <div class="">
                <v-btn block @click="handleLogout">
                    Logout
                </v-btn>
                </div>
            </template>

        </v-navigation-drawer>

        <v-app-bar
            dark
            app
            style="height: 62px;background:rgb(236 19 130 / 85%)">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title></v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

        </v-app-bar>

        <v-main>
            <v-container fluid>
            <!-- If using vue-router -->
            <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
// import Header from './Header.vue'
// import Sidebar from './Sidebar.vue'
export default {
    name: 'Layout',
    data () {
      return {
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', link:'/dashboard'},
          { title: 'Account', icon: 'mdi-account-box', link:'/dashboard' },
          { title: 'Home', icon: 'mdi-gavel', link:'/home' },
        ],
        drawer: null,
        selectedItem: 0,
      }
    },
    methods: {
        handleLogout(){
            console.log('logout clicked')
        }
    }
    // components: {Header, Sidebar},
}
</script>