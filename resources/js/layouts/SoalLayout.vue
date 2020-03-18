<template>
  <v-app id="inspire">
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">Logo</span>
      </v-toolbar-title>

      <v-spacer />

      <v-btn icon large width="80px">timer</v-btn>

      <v-icon>||</v-icon>

      <v-btn icon large width="80px">user</v-btn>
    </v-app-bar>

    <!-- badannya -->

    <v-content>
      <v-container>
        <!-- <v-card class="mx-auto" height="150" max-width="200" outlined></v-card> -->

        <v-card
          class="mt-5 mx-auto justify-center"
          align="center"
          elevation="3"
          height="520"
          max-width="800"
        >
          <!-- kartu soal-->
          <v-row>
            <v-col justify="center" align="center" cols="12" xs="12" sm="12" md="6" lg="6">
              <v-card
                max-width="280"
                height="244"
                ripple
                color="light-blue lighten-5"
                shaped
                align="center"
                elevation="8"
                outlined
              >
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="overline mb-4">PSIKOTES SOAL</div>
                    <v-list-item-title class="headline mb-1">Keterangan</v-list-item-title>
                    <v-list-item-subtitle>keterangn</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-col>
            <v-col xs="12" cols="12" sm="12" md="6" lg="6">
              <v-card
                max-width="280"
                height="244"
                ripple
                shaped
                align="center"
                color="light-blue lighten-5"
                elevation="8"
                outlined
              >
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="overline mb-4">PSIKOTES SOAL</div>
                    <v-list-item-title class="headline mb-1">Keterangan</v-list-item-title>
                    <v-list-item-subtitle>keterangn</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({})
};
</script>
