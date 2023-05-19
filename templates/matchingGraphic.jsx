import device from 'core/js/device';
import React from 'react';
import { templates, classes } from 'core/js/reactHelpers';

export default function MatchingGraphic(props) {
  const {
    _isEnabled,
    _isInteractionComplete,
    _isCorrect,
    _canShowMarking,
    _isCorrectAnswerShown,
    _columns,
    _items,
    _options
  } = props;

  const displayAsCorrect = (_isInteractionComplete && (_isCorrectAnswerShown || _isCorrect));
  const screenSize = device.screenSize;
  const hasColumns = _columns[screenSize] > 1;
  return (
    <div className="component__inner matching__inner">

      <templates.header {...props} />

      <div className={classes([
        'component__widget matching__widget',
        !_isEnabled && 'is-disabled',
        _isInteractionComplete && 'is-complete is-submitted show-user-answer',
        displayAsCorrect && 'is-correct',
        hasColumns && 'has-columns'
      ])}>

        {_items.map(({
          text,
          _graphic,
          _index
        }, index) => {
          const activeOption = _options.find(option => (option._itemIndex === _index) && option._isActive);
          const displayItemAsCorrect = (!_isEnabled && _canShowMarking && (_isCorrectAnswerShown || activeOption?._shouldBeSelected));
          return (
            <div key={_index}
              className={classes([
                'matching-item',
                'item',
                `item-${index}`,
                'js-matching-item',
                displayItemAsCorrect ? 'is-correct' : 'is-incorrect'
              ])
              }
              style={(hasColumns && { width: `${100 / _columns[screenSize]}%` }) || null }
            >

              {text &&
              <div className="matching-item__title">
                <div className="matching-item__title_inner" dangerouslySetInnerHTML={{ __html: text }}>
                </div>
              </div>
              }
              {_graphic &&
              <templates.image {..._graphic}
                classNamePrefixes={[
                  'matching-item'
                ]}
              />
              }
              <div className="matching-item__select-container js-matching-item-select-container">

                <templates.matchingDropDown {...props} _itemIndex={_index} />

                <div className="matching-item__select-state">
                  <div className="matching-item__select-icon matching-item__select-correct-icon">
                    <div className="icon"></div>
                  </div>
                  <div className="matching-item__select-icon matching-item__select-incorrect-icon">
                    <div className="icon"></div>
                  </div>
                </div>

              </div>

            </div>
          );
        })}

      </div>

      <div className="btn__container"></div>

    </div>
  );
}
