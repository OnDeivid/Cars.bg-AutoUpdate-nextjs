import AuthActionButton from "./AuthActionButton";
import HeaderOptions from "./HeaderOptions";
import InteractiveHeader from "./InteractiveHeader";

export default async function Header() {

  return (
    <InteractiveHeader >
      <HeaderOptions />
      <AuthActionButton />
    </InteractiveHeader>
  );
}

