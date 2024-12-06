import InteractiveHeader from "./InteractiveHeader";
import AuthActionButton from "./AuthActionButton";
import HeaderOptions from "./HeaderOptions";

export default async function Header() {

  return (
    <InteractiveHeader >
      <HeaderOptions />
      <AuthActionButton />
    </InteractiveHeader>
  );
}

