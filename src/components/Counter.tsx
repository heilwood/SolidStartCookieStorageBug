import { cookieStorage, makePersisted } from "@solid-primitives/storage";
import { useNavigate } from "@solidjs/router";
import { createSignal } from "solid-js";

export default function Counter() {
  const [cookieLang, setCookieLang] = makePersisted(createSignal<string>(), {
    name: 'language',
    storage: cookieStorage.withOptions({ expires: new Date(+new Date() + 30 * 86400000) })
  });

  const navigate = useNavigate();

  function submit_lang_and_navigate_about(lang: string) {
    setCookieLang(lang);
    navigate("/about/");
  }

  function submit_lang_and_navigate_home(lang: string) {
    setCookieLang(lang);
    navigate("/");
  }

  function submit_lang_and_navigate_faq(lang: string) {
    setCookieLang(lang);
    navigate("/faq/");
  }

  return (
    <>
      <button
        class="w-[300px] rounded-full bg-gray-100 border-2 border-gray-300 focus:border-gray-400 active:border-gray-400 px-[2rem] py-[1rem]"
        onClick={() => submit_lang_and_navigate_about("pl")}
      >

        Set PL Language and Navigate to About
      </button>

      <button
        class="w-[300px] rounded-full bg-gray-100 border-2 border-gray-300 focus:border-gray-400 active:border-gray-400 px-[2rem] py-[1rem]"
        onClick={() => submit_lang_and_navigate_home("fr")}
      >

        Set FR language and Navigate to Home
      </button>
      <button
        class="w-[300px] rounded-full bg-gray-100 border-2 border-gray-300 focus:border-gray-400 active:border-gray-400 px-[2rem] py-[1rem]"
        onClick={() => submit_lang_and_navigate_faq("es")}
      >

        Set ES language and Navigate to Faq
      </button>
      Current cookie lang: {cookieLang()}
    </>
  );
}
