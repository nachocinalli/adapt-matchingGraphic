import MatchingView from 'components/adapt-contrib-matching/js/matchingView';

class MatchingGraphicView extends MatchingView {

  onQuestionRendered() {
    this.$('.matching-item__image-container').imageready(() => this.setReadyStatus());
  }
}
MatchingGraphicView.template = 'matchingGraphic.jsx';

export default MatchingGraphicView;
