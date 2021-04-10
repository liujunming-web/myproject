import MyButton from './MyButton.vue'

MyButton.install = xxx => xxx.component('MyButton',MyButton)

const Elements = {
    MyButton,
    install:xxx => {
        xxx.use(MyButton)
    }
}

export default Elements