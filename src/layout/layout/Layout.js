
import classes from './Layout.module.css';

export default function Layout({children}) {
    console.log("layout")
  return (
    <div>
      <main className={classes.main}>{children}</main>
    </div>
  );
}
