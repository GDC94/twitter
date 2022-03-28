
import React from "react";
import {Stack, Icon, Text, Image, StackProps} from "@chakra-ui/react";
import {BsThreeDots} from "react-icons/bs";
import profile from '../images/profile.png';

const ProfileButton: React.FC<StackProps> = (props) => {
  return (
    <Stack
      alignItems="center"
      direction="row"
      justifyContent="space-between"
      padding={4}
      {...props}
    >
      <Stack alignItems="center" direction="row" spacing={3}>
        <Image
          borderRadius="50%"
          height={9}
          src={profile}
          width={12}
        />
        <Stack spacing={0}>
          <Text fontSize="sm" fontWeight="bold" lineHeight="normal">
            German
          </Text>
          <Text fontSize="xs" lineHeight="normal" textStyle="translucid">
            @german
          </Text>
        </Stack>
      </Stack>
      <Icon as={BsThreeDots} />
    </Stack>
  );
};

export default ProfileButton;