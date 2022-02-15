<script setup lang="ts">
  import { computed, reactive, watchEffect } from "vue";
  import { VAlert, VBtn, VCol, VContainer, VForm, VRow, VTextField } from "vuetify/components";
  import ColorChecker from "../components/ColorChecker.vue";
  import Counter from "../components/Counter.vue";
  import HelloWorld from "../components/HelloWorld.vue";

  interface IReactiveData {
    felkialtojelDarab: number;
    nev: string;
    xek: string;
    felkialtojelek: string;
    napok: Array<string>;
    inputNap: string;
  }

  const r = reactive<IReactiveData>({
    felkialtojelDarab: 3,
    nev: "Jedlik Ányos",
    xek: "",
    felkialtojelek: "!!!",
    napok: ["hétfő", "kedd", "szerda"],
    inputNap: "",
  });

  setInterval(() => {
    let wrongCharPos = -1;
    for (let i = 0; i < r.xek.length; i++) {
      if (r.xek[i].toLowerCase() !== "x") {
        wrongCharPos = i;
        break;
      }
    }
    if (wrongCharPos !== -1) {
      if (r.xek.length <= 10) {
        r.xek = r.xek.replace(r.xek[wrongCharPos], "X");
      } else {
        r.xek = r.xek.replace(r.xek[wrongCharPos], "");
      }
    } else {
      if (r.xek.length < 10) {
        r.xek += "X";
      } else if (r.xek.length > 10) {
        r.xek = r.xek.slice(0, -1);
      }
    }
  }, 3000);

  const iNap = computed(() => r.inputNap.toLowerCase());

  watchEffect(() => (r.felkialtojelek = "!".repeat(r.felkialtojelDarab)));

  function onClick(művelet: string) {
    if (művelet === "+") {
      r.felkialtojelDarab++;
    } else if (művelet === "-") {
      r.felkialtojelDarab--;
    }
  }

  function napEllenorzese() {
    const joNapok: string[] = [
      "",
      "hétfő",
      "kedd",
      "szerda",
      "csütörtök",
      "péntek",
      "szombat",
      "vasárnap",
    ];
    return joNapok.includes(iNap.value);
  }

  function joNapHozzadni(nap: string) {
    return iNap.value !== "" && napEllenorzese() && !r.napok.includes(nap);
  }

  function hozzadNap(): void {
    r.napok.push(iNap.value);
    r.inputNap = "";
  }

  function joNapTorolni(nap: string): boolean {
    return r.napok.includes(nap);
  }

  function torolNap(): void {
    r.napok = r.napok.filter((i) => i !== iNap.value);
    r.inputNap = "";
  }
</script>

<template>
  <v-form>
    <v-container fluid>
      <HelloWorld msg="Hello World!!!" />

      <Counter :initial="10" />

      <ColorChecker class="mt-3" />

      <v-container class="ma-3">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="r.nev"
              counter="20"
              hint="Up to 20 characters are allowed!"
              label="Type your name!"
              :rules="[(v) => v.length <= 20 || 'Max 20 characters!']"
            ></v-text-field>
            <v-text-field
              v-model="r.xek"
              counter="10"
              hint="Up to 10 'x' characters are allowed!"
              label="Max 10 eX"
              :rules="[(v:String) => v.length <= 10 || 'Error: max 10 X!']"
            ></v-text-field>
            <v-alert class="ma-3" color="green" dense elevation="9" icon="mdi-import"
              >Hello {{ r.nev }} {{ r.xek }} {{ r.felkialtojelek }}</v-alert
            >
            <v-alert class="ma-3" color="yellow" dense elevation="9" icon="mdi-alert-box-outline"
              >Number of exclamation marks: {{ r.felkialtojelDarab }}</v-alert
            >
            <v-row class="ma-5" justify="center">
              <v-btn
                class="mx-3"
                color="primary"
                :disabled="r.felkialtojelDarab == 10"
                elevation="5"
                @click="onClick('+')"
                >Plus</v-btn
              >
              <v-btn
                class="mx-3"
                color="error"
                :disabled="r.felkialtojelDarab == 1"
                elevation="5"
                @click="onClick('-')"
                >Minus</v-btn
              >
            </v-row>
          </v-col>

          <v-col cols="12" md="6">
            <v-alert class="ma-3" color="orange" dense elevation="9" shaped>
              <ol class="pa-3">
                <li v-for="nap in r.napok" :key="nap">{{ nap }}</li>
              </ol>
            </v-alert>
            <v-text-field
              v-model="r.inputNap"
              class="mb-1"
              hint="Enter a name for a day!"
              label="Please name the day"
              :rules="[napEllenorzese() || 'Make sure you spell it correctly!']"
            ></v-text-field>

            <v-row justify="center">
              <v-btn
                class="ma-3"
                color="primary"
                :disabled="!joNapHozzadni(iNap)"
                elevation="5"
                @click="hozzadNap()"
                >Add day</v-btn
              >
              <v-btn
                class="ma-3"
                color="primary"
                :disabled="!joNapTorolni(iNap)"
                elevation="5"
                @click="torolNap()"
                >Delete day</v-btn
              >
            </v-row>
          </v-col>
        </v-row>
      </v-container>

      <v-btn block class="mt-3" color="info" flat to="/about"> Go To About </v-btn>
    </v-container>
  </v-form>
</template>
