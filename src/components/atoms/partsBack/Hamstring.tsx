import { memo, VFC } from "react";
import { Image } from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import hamstring from "../../../data/img/bodyBack/Hamstring.png";
import hamstringY from "../../../data/img/bodyBack/HamstringY.png";
import { partsState } from "../../../store/partsState";
import { BooleanFalse } from "../../../data/Boolean.js";

type Props = {
  scroll: () => void;
};

export const Hamstring: VFC<Props> = memo(({ scroll }) => {
  const [partsBoolean, setPartsBoolean] = useRecoilState(partsState);
  const onClickHamstringTrue = () => {
    scroll();
    setPartsBoolean([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      false,
    ]);
  };
  const onClickHamstringFalse = () => {
    setPartsBoolean(BooleanFalse);
  };
  return partsBoolean[9] === false ? (
    <Image
      src={hamstring}
      alt="四頭筋のイラスト"
      position="absolute"
      h={{ base: "4.3rem", md: "8rem" }}
      left={{ base: "29.1%", md: "29.8%" }}
      top="57%"
      opacity={1}
      zIndex={1}
      _hover={{ opacity: 0.8 }}
      onClick={onClickHamstringTrue}
    />
  ) : (
    <Image
      src={hamstringY}
      alt="四頭筋のイラスト"
      position="absolute"
      h={{ base: "4.3rem", md: "8rem" }}
      left={{ base: "29.1%", md: "29.8%" }}
      top="57%"
      zIndex={1}
      onClick={onClickHamstringFalse}
    />
  );
});
