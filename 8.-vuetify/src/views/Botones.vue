<template>
    <v-container>
        <v-layout>
            <v-col>

                <v-btn>Texto</v-btn>
                <v-btn color="secondary">Texto</v-btn>
                <v-btn dark color="blue">Texto</v-btn>

                <v-btn color="secondary" text>Sin fondo</v-btn>

                <v-btn color="warning mr-1" large>Largo</v-btn>
                <v-btn color="warning" small>Small</v-btn>
                <v-btn color="warning" large :disabled="true">Largo</v-btn>

                <v-btn color="info" depressed>Boton</v-btn>

                <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn color="primary" fab>
                    <v-icon>mdi-forum</v-icon>
                </v-btn>

                <v-btn color="success">
                    Texto
                    <v-icon>mdi-forum</v-icon>
                </v-btn>
                <v-btn color="secondary">
                    Texto
                    <v-icon right>mdi-forum</v-icon>
                </v-btn>
                <v-btn color="success">
                    <v-icon left>mdi-forum</v-icon>
                    Texto
                </v-btn>

                <v-btn color="success" outlined>
                    <v-icon left>mdi-forum</v-icon>
                    Texto
                </v-btn>

                <v-btn color="success" outlined block>
                    <v-icon left>mdi-forum</v-icon>
                    Texto
                </v-btn>


            </v-col>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data(){
        return {

        };
    }
};

</script>