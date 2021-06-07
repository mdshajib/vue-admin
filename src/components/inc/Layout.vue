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

            <v-list>
                <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <template v-slot:append>
                <div class="">
                <v-btn block>
                    Logout
                </v-btn>
                </div>
            </template>

        </v-navigation-drawer>

        <v-app-bar
            dark
            app
            style="height: 62px;background:#e00c9fd9">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title></v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

        </v-app-bar>

        <v-main>
            <!--  -->
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
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Account', icon: 'mdi-account-box' },
          { title: 'Admin', icon: 'mdi-gavel' },
        ],
        drawer: null,
      }
    }
    // components: {Header, Sidebar},
}
</script>