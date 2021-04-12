import MyButton from './MyButton.vue'
import MyList from './MyList.vue'

MyButton.install = xxx => xxx.component('MyButton',MyButton)
MyList.install = xxx => xxx.component('MyList',MyList)

const Elements = {
    MyButton,
    MyList,
    install:xxx => {
        xxx.use(MyButton)
        xxx.use(MyList)
    }
}

export default Elements