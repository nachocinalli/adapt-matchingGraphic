import components from 'core/js/components';
import MatchingGraphicModel from './matchingGraphicModel';
import MatchingGraphicView from './matchingGraphicView';

export default components.register('matchingGraphic', {
  model: MatchingGraphicModel,
  view: MatchingGraphicView
});
