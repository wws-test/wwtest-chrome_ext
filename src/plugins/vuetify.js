import { createVuetify } from 'vuetify'
import { VCard, VCardText } from 'vuetify/components/VCard'
import { VApp } from 'vuetify/components/VApp'
import { VProgressCircular } from 'vuetify/components/VProgressCircular'

import { VBtn } from 'vuetify/components/VBtn'
import { VRating } from 'vuetify/components/VRating'
import { VToolbar } from 'vuetify/components/VToolbar'
import { Ripple } from 'vuetify/directives'

const metalicDarkTheme = {
    dark: true,
    colors: {
        primary: '#757575',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
    }
}

const vuetify = createVuetify({
    theme: {
        defaultTheme: 'metalicDarkTheme',
        themes: {
            metalicDarkTheme,
        }
    },
    components: {
        VApp,
        VBtn,
        VCard,
        VCardText,
        VRating,
        VToolbar,
        VProgressCircular
    },
    directives: {
        Ripple,
    },
})

export default vuetify