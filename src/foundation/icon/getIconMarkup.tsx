import React from "react";

import { EIcon, TIconNames } from './icon.enum';

import { ReactComponent as IconAlert } from '../../assets/icons/icon_alert.svg';
import { ReactComponent as IconBadgeFacebook } from '../../assets/icons/icon_badge-facebook.svg';
import { ReactComponent as IconBadgeInstagram } from '../../assets/icons/icon_badge-instagram.svg';
import { ReactComponent as IconBadgePinterest } from '../../assets/icons/icon_badge-pinterest.svg';
import { ReactComponent as IconBadgeSnapchat } from '../../assets/icons/icon_badge-snapchat.svg';
import { ReactComponent as IconBadgeTwitter } from '../../assets/icons/icon_badge-twitter.svg';
import { ReactComponent as IconBadgeYoutube } from '../../assets/icons/icon_badge-youtube.svg';
import { ReactComponent as IconCart } from '../../assets/icons/icon_cart.svg';
import { ReactComponent as IconCheckmark } from '../../assets/icons/icon_checkmark.svg';
import { ReactComponent as IconChevron } from '../../assets/icons/icon_chevron.svg';
import { ReactComponent as IconFaceCircle } from '../../assets/icons/icon_face-circle.svg';
import { ReactComponent as IconEdit } from '../../assets/icons/icon_edit.svg';
import { ReactComponent as IconEnvelope } from '../../assets/icons/icon_envelope.svg';
import { ReactComponent as IconFacebook } from '../../assets/icons/icon_facebook.svg';
import { ReactComponent as IconFaceFrown } from '../../assets/icons/icon_face-frown.svg';
import { ReactComponent as IconHamburger } from '../../assets/icons/icon_hamburger.svg';
import { ReactComponent as IconHanger } from '../../assets/icons/icon_hanger.svg';
import { ReactComponent as IconHeart } from '../../assets/icons/icon_heart.svg';
import { ReactComponent as IconHowItWorks } from '../../assets/icons/icon_howitworks.svg';
import { ReactComponent as IconInformation } from '../../assets/icons/icon_information.svg';
import { ReactComponent as IconLoader } from '../../assets/icons/icon_loader.svg';
import { ReactComponent as IconMinus } from '../../assets/icons/icon_minus.svg';
import { ReactComponent as IconNotesPanel } from '../../assets/icons/icon_notespanel.svg';
import { ReactComponent as IconFaceNeutral } from '../../assets/icons/icon_face-neutral.svg';
import { ReactComponent as IconPlans } from '../../assets/icons/icon_plans.svg';
import { ReactComponent as IconPlus } from '../../assets/icons/icon_plus.svg';
import { ReactComponent as IconProfile } from '../../assets/icons/icon_profile.svg';
import { ReactComponent as IconQuestionmark } from '../../assets/icons/icon_questionmark.svg';
import { ReactComponent as IconQuiz } from '../../assets/icons/icon_quiz.svg';
import { ReactComponent as IconRefresh } from '../../assets/icons/icon_refresh.svg';
import { ReactComponent as IconFaceSmiley } from '../../assets/icons/icon_face-smiley.svg';
import { ReactComponent as IconStar } from '../../assets/icons/icon_star.svg';
import { ReactComponent as IconUsa } from '../../assets/icons/icon_usa.svg';
import { ReactComponent as IconX } from '../../assets/icons/icon_x.svg';

export const getIconMarkup = (name: TIconNames) => {
  switch(name) {
    case EIcon.Alert: return <IconAlert />
    case EIcon.BadgeFacebook: return <IconBadgeFacebook />
    case EIcon.FaceFrown: return <IconFaceFrown />
    case EIcon.BadgeInstagram: return <IconBadgeInstagram />
    case EIcon.BadgePinterest: return <IconBadgePinterest />
    case EIcon.BadgeSnapchat: return <IconBadgeSnapchat />
    case EIcon.BadgeTwitter: return <IconBadgeTwitter />
    case EIcon.BadgeYoutube: return <IconBadgeYoutube />
    case EIcon.Cart: return <IconCart />
    case EIcon.Checkmark: return <IconCheckmark />
    case EIcon.Chevron: return <IconChevron />
    case EIcon.FaceCircle: return <IconFaceCircle />
    case EIcon.Edit: return <IconEdit />
    case EIcon.Envelope: return <IconEnvelope />
    case EIcon.Facebook: return <IconFacebook />
    case EIcon.Hamburger: return <IconHamburger />
    case EIcon.Hanger: return <IconHanger />
    case EIcon.Heart: return <IconHeart />
    case EIcon.HowItWorks: return <IconHowItWorks />
    case EIcon.Information: return <IconInformation />
    case EIcon.Loader: return <IconLoader />
    case EIcon.Minus: return <IconMinus />
    case EIcon.NotesPanel: return <IconNotesPanel />
    case EIcon.FaceNeutral: return <IconFaceNeutral />
    case EIcon.Plans: return <IconPlans />
    case EIcon.Plus: return <IconPlus />
    case EIcon.Profile: return <IconProfile />
    case EIcon.Questionmark: return <IconQuestionmark />
    case EIcon.Quiz: return <IconQuiz />
    case EIcon.Refresh: return <IconRefresh />
    case EIcon.FaceSmiley: return <IconFaceSmiley />
    case EIcon.Star: return <IconStar />
    case EIcon.Usa: return <IconUsa />
    case EIcon.X: return <IconX />
  }
}