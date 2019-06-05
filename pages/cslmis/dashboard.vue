<template>
  <div class="animated fadeIn">
    <b-card header-tag="header">
      <div slot="header">
        <i class="icon-drop"></i> Welcome to the dashboard
      </div>
      <b-card-body>
        <b-row>
          <div>
            <mdb-container>
		<mdb-row>
			<mdb-col sm="4">
				<mdb-card>
					<mdb-view hover>
						<a href="#!">
							<mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/food.jpg" alt="Card image cap"></mdb-card-image>
							<mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
						</a>
					</mdb-view>
					<mdb-btn tag="a" floating action class="ml-auto mr-4 mdb-color lighten-3">
						<mdb-icon icon="chevron-right" class="pl-1" />
					</mdb-btn>
					<mdb-card-body>
						<mdb-card-title>Card title</mdb-card-title>
						<hr />
						<p class="font-small grey-dark-text mb-0">Some quick example text to build on the card title
							and make up the bulk of the card's content.</p>
					</mdb-card-body>
					<mdb-card-footer color="mdb-color" class="lighten-3 p-0 text-center">
						<ul class="list-unstyled list-inline font-small mt-3">
							<li class="list-inline-item pr-2 white-text">
								<mdb-icon far icon="clock" class="pr-1" />05/10/2015</li>
							<li class="list-inline-item pr-2"><a href="#" class="white-text">
								<mdb-icon far icon="comments" class="pr-1" />12</a></li>
							<li class="list-inline-item pr-2"><a href="#" class="white-text">
								<mdb-icon fab icon="facebook" class="pr-1" />21</a></li>
							<li class="list-inline-item"><a href="#" class="white-text">
								<mdb-icon fab icon="twitter" class="pr-1" />5</a></li>
						</ul>
					</mdb-card-footer>
				</mdb-card>
			</mdb-col>
		</mdb-row>
	</mdb-container>
          </div>
        </b-row>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, mdbCardAvatar, mdbCardGroup, mdbBtn, mdbView, mdbMask, mdbIcon } from 'mdbvue';
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
			mdbIcon
		}
  }
</script>
