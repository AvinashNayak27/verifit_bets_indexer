/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  GoalBetting,
  GoalBetting_CreatedBetEvent,
  GoalBetting_ResolvedBetEvent,
} from "generated";

GoalBetting.CreatedBetEvent.handler(async ({ event, context }) => {
  const entity: GoalBetting_CreatedBetEvent = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    betId: event.params.betId,
    user: event.params.user,
    minSteps: event.params.minSteps,
    startTimestamp: event.params.startTimestamp,
    endTimestamp: event.params.endTimestamp,
  };

  context.GoalBetting_CreatedBetEvent.set(entity);
});


GoalBetting.ResolvedBetEvent.handler(async ({ event, context }) => {
  const entity: GoalBetting_ResolvedBetEvent = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    betId: event.params.betId,
    user: event.params.user,
    successful: event.params.successful,
  };

  context.GoalBetting_ResolvedBetEvent.set(entity);
});

