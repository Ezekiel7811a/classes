import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  List,
  Text,
} from "@chakra-ui/react";
import React, { ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Bonus = ({ children: bonusElement }: Props) => {
  const bonuses = React.Children.toArray(bonusElement);
  return (
    <div>
      <Accordion allowToggle>
        {bonuses.map((bonus, index) => {
          return (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton bgColor={"orange"}>
                  <Box as="span" flex={1} textAlign="left">
                    {`Bonus ${index + 1}`}
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{bonus}</AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Bonus;
