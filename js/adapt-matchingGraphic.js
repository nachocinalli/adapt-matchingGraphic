import Adapt from 'core/js/adapt';
import MatchingGraphicModel from './matchingGraphicModel';
import MatchingGraphicView from './matchingGraphicView';

export default Adapt.register('matchingGraphic', {
  model: MatchingGraphicModel,
  view: MatchingGraphicView
});
