import Link from "next/link";

type MenubarProps ={
  page : string;
}
export default function MenuBar(props:MenubarProps) {
  return (
    <div>
    <div className="flex justify-around bg-blue-500 p-4 text-3xl">
      <Link className="menu-item krub-regular" href="/">
        หน้าหลัก
      </Link>
      <Link className="menu-item krub-regular" href="/state">
        เรียนรู้ State
      </Link>
      <Link className="menu-item krub-regular" href="/props">
        เรียนรู้ Props
      </Link>
      <Link className="menu-item krub-regular" href="/use-effect">
        เรียนรู้ Use_Effect
      </Link>
</div>

    <div className="p-4 bg-blue-500">
        <p className="text-2xl kanit-meduim text-center">ตอนนี้ถึงตรงนี้เเล้วนะ{props.page}</p>




    </div>
    </div>

  );
}