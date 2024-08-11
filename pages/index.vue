<script setup>
const isSideMenuOpen = ref(false);
const isProfileMenuOpen = ref(false);
const theme = ref('light');
const toggleTheme = () => {
  if (theme.value == 'light') {
    theme.value = 'dark';
  } else {
    theme.value = 'light'
  }
}
const toggleProfileMenu = () => {
  if (isProfileMenuOpen.value) {
    isProfileMenuOpen.value = false;
  } else {
    isProfileMenuOpen.value = true;
  }
}
useHead({
  bodyAttrs: {
    class: theme,
  },
})
const route = useRoute();
console.log(route.fullPath);
const url = ref('');
if (route.fullPath == '/fr') {
  url.value = '/files/cv-landry-fr.pdf';
} else {
  url.value = '/files/cv-landry-en.pdf';
}

const downloadPDF = () => {
  // L'URL du fichier PDF dans le répertoire static
  const pdfUrl = url.value;

  // Créer un élément <a> invisible
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.setAttribute('download', 'cv-landry.pdf'); // Le nom du fichier à télécharger

  // Ajouter l'élément <a> au DOM
  document.body.appendChild(link);

  // Déclencher le clic sur le lien
  link.click();

  // Supprimer l'élément <a> après le téléchargement
  document.body.removeChild(link);
};
const switchLocalePath = useSwitchLocalePath();


</script>

<template>
  <div class="flex h-screen bg-gray-50 dark:bg-gray-900" :class="{ 'overflow-hidden': isSideMenuOpen }">
    <!-- Desktop sidebar -->

    <!-- Mobile sidebar -->
    <!-- Backdrop -->

    <div class="flex flex-col flex-1 w-full">
      <header class="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
        <div
          class="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
          <span class="font-bold max-sm:text-sm">Zoundi Landry</span>
          <!-- Mobile hamburger -->

          <!-- Search input -->

          <ul class="flex items-center flex-shrink-0 space-x-6 max-sm:flex-col">

            <button @click="downloadPDF"
              class="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple max-sm:text-xs max-sm:my-2">
              {{ $t('pdf') }}
            </button>
            <!-- Theme toggler -->
            <li class=" flex">
              <button @click="toggleTheme" class="rounded-md focus:outline-none focus:shadow-outline-purple"
                aria-label="Toggle color mode">
                <template v-if="theme == 'light'">
                  <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                </template>
                <template v-if="theme == 'dark'">
                  <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clip-rule="evenodd"></path>
                  </svg>
                </template>
              </button>
            </li>
            <!-- Notifications menu -->

            <!-- Profile menu -->
            <li class="relative max-sm:my-2">
              <button
                class="align-middle rounded-full focus:shadow-outline-purple focus:outline-none border p-1 max-sm:text-xs"
                @click="toggleProfileMenu" @keydown.escape="closeProfileMenu" aria-label="Account" aria-haspopup="true">
                {{ $t('language') }} <i class="fa-solid fa-angle-down"></i>
              </button>
              <template v-if="isProfileMenuOpen">
                <ul x-transition:leave="transition ease-in duration-150" x-transition:leave-start="opacity-100"
                  x-transition:leave-end="opacity-0" @click.away="closeProfileMenu" @keydown.escape="closeProfileMenu"
                  class="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700"
                  aria-label="submenu">
                  <li class="flex">
                    <NuxtLink :to="switchLocalePath('fr')"
                      class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                      <span>French</span>
                    </NuxtLink>
                  </li>
                  <li class="flex">

                    <NuxtLink :to="switchLocalePath('en')"
                      class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                      <span>English</span>
                    </NuxtLink>
                  </li>

                </ul>
              </template>
            </li>

            <li class="relative">
              <button class="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
                aria-label="Account" aria-haspopup="true">
                <img class="object-cover w-8 h-8 rounded-full" src="~/assets/img/photo_cv.jpg" alt=""
                  aria-hidden="true" />
              </button>
            </li>
          </ul>
        </div>
      </header>
      <main class="h-full overflow-y-auto">
        <div class="container px-6 mx-auto grid">
          <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Portfolio
          </h2>
          <!-- CTA -->
          <a class="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple"
            href="https://github.com/burkinaDevelopper">
            <div class="flex items-center">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <span>{{ $t('student') }}</span>
            </div>
            <span>{{ $t('detail') }} &RightArrow;</span>
          </a>
          <!-- Cards -->
          <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
            <div class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
              <div class="flex flex-col overflow-y-auto md:flex-row">
                <div class="h-32 md:h-auto md:w-1/2 bg-purple-600">
                  <div class="p-6 text-white">
                    <h2 class=" pt-10 text-xl font-bold ">{{ $t('profil') }}</h2>
                    <h4 class="my-3">Experience: <em>3 {{ $t('years') }}</em></h4>
                    <p>{{ $t('p1') }}</p>
                    <p class="my-3">{{ $t('p2') }}</p>
                    <p>{{ $t('p3') }}</p>
                    <h3 class="mt-4 text-xl font-bold"><strong>Networks</strong></h3>
                    <ul>
                      <li class="my-3 "><span class="mr-2 "><i
                            class="fa-brands fa-github"></i></span><span>https://github.com/burkinaDevelopper</span>
                      </li>
                      <li class="my-3"><span class="mr-2"><i
                            class="fa-brands fa-linkedin"></i></span><span>https://www.linkedin.com/in/landry-zoundi-ba51b8208/</span>
                      </li>
                      <li class="my-3 "><span class="mr-2"><i
                            class="fa-solid fa-envelopes-bulk"></i></span><span>zoundilandry@gmail.com</span>
                      </li>
                    </ul>
                    <h3 class="mt-4 text-xl font-bold"><strong>{{ $t('network') }}</strong></h3>
                    <ul>
                      <li>English</li>
                      <li>French</li>
                    </ul>
                  </div>
                </div>
                <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                  <div class="w-full">
                    <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                      <i class="fa-solid fa-screwdriver-wrench"></i>
                      <span> expertise</span> <br>
                      <strong class="mt-4">{{ $t('job') }}</strong>
                    </h1>
                    <label class="block text-sm">
                      <ul>
                        <li class="text-gray-700 dark:text-gray-400">Architecture MVC</li>
                        <li class="text-gray-700 dark:text-gray-400">{{ $t('poo') }}</li>
                        <li class="text-gray-700 dark:text-gray-400">{{ $t('p_event') }}</li>
                        <li class="text-gray-700 dark:text-gray-400">{{ $t('procedural') }}</li>
                      </ul>
                    </label>
                    <h1 class="mb-4  mt-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                      <strong class="">{{ $t('skill') }}</strong>
                    </h1>
                    <label class="block text-sm">
                      <ul>
                        <li class="text-gray-700 dark:text-gray-400">PHP/Laravel</li>
                        <li class="text-gray-700 dark:text-gray-400">javascript(vue js,nuxt js,react js,jQuery)</li>
                        <li class="text-gray-700 dark:text-gray-400">Docker,CPanel</li>
                        <li class="text-gray-700 dark:text-gray-400">css(tailwind css,bootstrap css,sass)</li>
                        <li class="text-gray-700 dark:text-gray-400">API REST,API GraphQL</li>
                        <li class="text-gray-700 dark:text-gray-400">UML,MERISE</li>
                        <li class="text-gray-700 dark:text-gray-400">Mysql,NoSQl</li>
                        <li class="text-gray-700 dark:text-gray-400">SEO</li>
                      </ul>
                    </label>
                    <!-- You should use a button here, as the anchor is only used for the example  -->
                    <hr class="my-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- New Table -->


          <!-- Charts -->
          <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
            {{ $t('project') }}
          </h4>
          <div class="grid gap-2 mb-8 md:grid-cols-2 ">
            <div class="p-2 bg-white rounded-lg shadow-xs dark:bg-gray-800 max-sm:p-0">
              <h4 class="mb-4 font-semibold text-gray-600 dark:text-gray-300">
                Ecommerce {{ $t('with') }} Nuxt js
              </h4>
              <p class="text-gray-600 dark:text-gray-400">
                {{ $t('ecommerce') }}
              </p>
              <a href="https://ecommerce-nuxt-srr.netlify.app/"><img src="~/assets/img/ecommerce.png" alt=""></a>
            </div>
            <div class="min-w-0 p-4 text-white bg-purple-600 rounded-lg shadow-xs max-sm:p-0">
              <h4 class="mb-4 font-semibold">
                Bitcoin {{ $t('with') }} React js and API
              </h4>
              <p>
                {{ $t('bitcoin') }}
              </p>
              <a href="https://bitcoin-management.netlify.app"><img src="~/assets/img/bitcon.png" alt=""></a>
            </div>
            <div class="min-w-0 p-4 text-white bg-purple-600 rounded-lg shadow-xs max-sm:p-0">
              <h4 class="mb-4 font-semibold">
                pixstop {{ $t('with') }} laravel Vue js 3
              </h4>
              <p>
                {{ $t('pixstop') }}
              </p>
              <a href="https://pixstop-image.netlify.app"><img src="~/assets/img/pixstop.png" alt=""></a>
            </div>
          </div>

        </div>

      </main>
    </div>
  </div>
</template>

<style scoped></style>
