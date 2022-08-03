import { memo, VFC, createRef, useCallback } from "react";
import { Box, Image } from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import faceBack from "../../../data/img/bodyBack/face2.png";
import { Back } from "../../atoms/partsBack/Back";
import { DeltoidBack } from "../../atoms/partsBack/DeltoidBack";
import { Triceps } from "../../atoms/partsBack/Triceps";
import { ArmBack } from "../../atoms/partsBack/ArmBack";
import { Hip } from "../../atoms/partsBack/Hip";
import { Hamstring } from "../../atoms/partsBack/Hamstring";
import { Gastrocnemius } from "../../atoms/partsBack/Gastrocnemius";
import { partsState } from "../../../store/partsState";
import { BooleanFalse } from "../../../data/Boolean";
import { InView } from "../../../hooks/InView";

export const AnatomicalModelBack: VFC = memo(() => {
  const [partsBoolean, setPartsBoolean] = useRecoilState(partsState);
  const onClickReset = () => {
    setPartsBoolean(BooleanFalse);
  };
  const ref = createRef<HTMLDivElement>();
  const scrollToBottomOfList = useCallback(() => {
    ref!.current!.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [ref]);
  const onClickParts = () => {
    scrollToBottomOfList();
  };
  return (
    <InView>
      <Box
        h={{ base: "24rem", md: "44rem" }}
        w={{ base: "14rem", md: "24rem" }}
        ml={{ base: "none", md: 6, lg: 12 }}
        position="relative"
      >
        <Box
          h={{ base: "24rem", md: "44rem" }}
          width={{ base: "20rem", sm: "30rem", md: "24rem", lg: "32rem" }}
          mr={{ base: "none", md: 6, lg: 12 }}
          left={{ base: "-3rem", sm: "-8rem", md: "-2rem", lg: "-3rem" }}
          position="absolute"
          onClick={onClickReset}
        />
        <Image
          src={faceBack}
          alt="顔後ろのイラスト"
          position="absolute"
          h={{ base: "4.5rem", md: "8rem" }}
          left={{ base: "36%", md: "38%" }}
        />
        <Back scroll={onClickParts} />
        <DeltoidBack scroll={onClickParts} />
        <Triceps scroll={onClickParts} />
        <ArmBack scroll={onClickParts} />
        <Hip scroll={onClickParts} />
        <Hamstring scroll={onClickParts} />
        <Gastrocnemius scroll={onClickParts} />
      </Box>
      <div ref={ref}></div>
    </InView>
  );
});
