import Format from "@/layout/format";
export default function Home() {
  return (
    <>
      <Format>
        <Blog />
        <Post />
        <User />
      </Format>
    </>
  );
}
