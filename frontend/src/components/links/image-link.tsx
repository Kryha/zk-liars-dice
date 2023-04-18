import { FC } from "react";
import { GithubLogo, text } from "../../assets";
import { OPEN_LINK_IN_NEW_TAB } from "../../constants";
import { Heading6 } from "../../atoms";
import { GeneralLinkContainer, GeneralLinkWrapper, HyperLink, ImageLinkContainer, LinkImage } from "./styles";

interface Props {
  link: string;
  image: string;
  width?: string;
}

export const ImageLink: FC<Props> = ({ image, link, width }) => {
  return (
    <HyperLink href={link} target={OPEN_LINK_IN_NEW_TAB}>
      <GeneralLinkContainer>
        <LinkImage src={image} width={width} />
      </GeneralLinkContainer>
    </HyperLink>
  );
};

export const SocialMediaImageLinks: FC = () => {
  return (
    <GeneralLinkWrapper>
      <Heading6>{text.landing.joinTheCommunity}</Heading6>
      <ImageLinkContainer>
        {/* TODO: enable when there is a discord link */}
        {/* <ImageLink image={DiscordLogo} link={text.landing.discordLink} /> */}
        <ImageLink image={GithubLogo} link={text.landing.githubLink} />
      </ImageLinkContainer>
    </GeneralLinkWrapper>
  );
};
