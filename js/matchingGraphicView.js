import MatchingView from 'components/adapt-contrib-matching/js/MatchingView';

class MatchingGraphicView extends MatchingView {
  setupQuestion() {
    if (this.model.get('_isItemsRandom') && this.model.get('_isEnabled')) {
      const items = _.shuffle(this.model.get('_items'));
      this.model.set('_items', items);
    }
    this.model.setupRandomisation();
    this.model.setupInitialHighlighted();
  }

  onQuestionRendered() {
    this.$('.matching-item__image-container').imageready(() => this.setReadyStatus());
  }
}
MatchingGraphicView.template = 'matchingGraphic.jsx';

export default MatchingGraphicView;
