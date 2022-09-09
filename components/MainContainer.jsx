import style from '../styles/MainContainer.module.css'
import Head from "next/head"
import A from './A'
export default function MainContainer({ children, keywords }) {
    return (
        <>
            <Head>
                <meta keywords={"ulbi tv, nextjs" + keywords}></meta>
                <title>Главная страница</title>
            </Head>
            <div className={style.navbar}>
                <A href={'/'} text='Главная' />
                <A href={'/users'} text='Пользователи' />
            </div>
            <div>
                {children}
            </div>
        </>
    )
}
