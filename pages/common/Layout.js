import style from "common/styles/Layout.module.css";
import Nav from "common/Nav";
import Footer from './Footer';

export default function Layout({ children }){
  return (
    <>
    <Nav/>
      <div className={style.container}>
        <main className={style.main}>{children}</main>
      </div>
      <Footer/>
    </>
  );
};