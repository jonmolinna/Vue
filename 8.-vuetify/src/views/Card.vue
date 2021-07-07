<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="6">
                <v-card>
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" />

                    <v-card-title>
                        <h3>Lorem, ipsum dolor.</h3>
                    </v-card-title>

                    <v-card-text>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Recusandae nisi quis esse harum ipsam, tempora ipsum error 
                            architecto quidem magni dolorem, quaerat accusamus dignissimos 
                            optio molestias odio? Nostrum, atque ducimus?
                        </p>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="orange lighten-2" text @click="dialog = true">Explore</v-btn>
                    </v-card-actions>

                </v-card>
            </v-col>

            <v-col cols="12" sm="6">
                <v-card>
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" />

                    <v-card-title>
                        <h3>Lorem, ipsum dolor.</h3>
                    </v-card-title>

                    <v-card-text>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Recusandae nisi quis esse harum ipsam, tempora ipsum error 
                            architecto quidem magni dolorem, quaerat accusamus dignissimos 
                            optio molestias odio? Nostrum, atque ducimus?
                        </p>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="orange lighten-2" text>Explore</v-btn>
                    </v-card-actions>

                </v-card>
            </v-col>

            <v-col cols="12" sm="6">
                <v-card>
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" />

                    <v-card-title>
                        <h3>Lorem, ipsum dolor.</h3>
                    </v-card-title>

                    <v-card-text>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Recusandae nisi quis esse harum ipsam, tempora ipsum error 
                            architecto quidem magni dolorem, quaerat accusamus dignissimos 
                            optio molestias odio? Nostrum, atque ducimus?
                        </p>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="orange lighten-2" text>Explore</v-btn>
                    </v-card-actions>

                </v-card>
            </v-col>

            <v-col cols="12" sm="6">
                <v-card>
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" />

                    <v-card-title>
                        <h3>Lorem, ipsum dolor.</h3>
                    </v-card-title>

                    <v-card-text>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Recusandae nisi quis esse harum ipsam, tempora ipsum error 
                            architecto quidem magni dolorem, quaerat accusamus dignissimos 
                            optio molestias odio? Nostrum, atque ducimus?
                        </p>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="orange lighten-2" text>Explore</v-btn>
                    </v-card-actions>

                </v-card>
            </v-col>
        </v-row>

        <!--- DIALOG ------>
        <v-dialog v-model="dialog" width="500">
            <v-card>
                <v-card-title>
                    Las amazonas
                </v-card-title>
                <v-card-text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur 
                    necessitatibus delectus ut dolorem nobis labore saepe quam rem qui
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-btn @click="dialog = false">Cerrar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </v-container>

</template>

<script>
export default {
    name: 'Card',
    data(){
        return {
            dialog: false,
        }
    }
}
</script>

<style>

</style>