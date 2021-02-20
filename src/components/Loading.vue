<template>
    <v-container>
        <v-row
            class="fill-height"
            align-content="center"
            justify="center"
        >
            <v-col
                class="subtitle-1 text-center"
                cols="12"
            >
                <h3>讀取中</h3>
            </v-col>
            <v-col cols="6">
                <v-progress-linear
                color="green"
                indeterminate
                rounded
                height="10"
                ></v-progress-linear>
            </v-col>
        </v-row>
    </v-container>
</template>