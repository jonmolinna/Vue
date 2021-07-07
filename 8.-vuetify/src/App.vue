<template>
  <v-app>

    <v-app-bar app class="success">
      <v-app-bar-nav-icon @click="drawer = !drawer">
      </v-app-bar-nav-icon>

      <v-app-bar-title>Vuetify</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn class="primary">Ingreso</v-btn>
      <v-btn class="error ml-3">Salir</v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"  
      app
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://avatars.githubusercontent.com/u/54208914?v="></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Jon Dallas</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link" @click="drawer = false">

          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      drawer: false,
      items: [
        {title: 'Home', icon: 'mdi-view-dashboard', link: '/'},
        {title: 'Botones', icon: 'mdi-forum', link: '/botones'},
        {title: 'Grid', icon: 'mdi-view-dashboard', link: '/grid'},
        {title: 'Card', icon: 'mdi-view-dashboard', link: '/card'},
        {title: 'Tareas', icon: 'mdi-view-dashboard', link: '/tareas'},
      ]
    }
  },
};

// Para poner una sola ruta 
// :to={name: 'tareas'}
</script>
