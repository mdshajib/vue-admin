<template>
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
</template>

<script>
export default {
    name: 'Header',
}
</script>