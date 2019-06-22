<template>
  <div class="animated fadeIn">
    <b-card header-tag="header">
      <div slot="header">
        <i class="icon-drop"></i> Welcome to the dashboard
      </div>
      <b-card-body>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import  {mdbFlippingCard, mdbAvatar,  mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, mdbCardAvatar, mdbCardGroup, mdbBtn, mdbView, mdbMask, mdbIcon } from 'mdbvue';
  export default {
    name: 'dashboard',
    components: {
			mdbContainer,
			mdbRow,
			mdbCol,
			mdbCard,
			mdbCardImage,
			mdbCardHeader,
			mdbCardBody,
			mdbCardTitle,
			mdbCardText,
			mdbCardFooter,
			mdbCardUp,
			mdbCardAvatar,
			mdbCardGroup,
			mdbBtn,
			mdbView,
			mdbMask,
			mdbFlippingCard,
		  mdbAvatar,
			mdbIcon
		},
 	data() {
			return {
				flipped: false,
			};
		}
  }
</script>
