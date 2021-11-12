import MatchingView from 'components/adapt-contrib-matching/js/matchingView';

class MatchingGraphicView extends MatchingView {

  onQuestionRendered() {
    this.$('.matching__item-graphic').imageready(() => {
      this.setReadyStatus();
    });

    this.setUpDropdowns();
  }

}
MatchingGraphicView.template = 'matching-graphic';

export default MatchingGraphicView;
