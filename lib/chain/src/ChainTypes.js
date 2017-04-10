let ChainTypes = {};

ChainTypes.reserved_spaces = {
  relative_protocol_ids: 0,
  protocol_ids: 1,
  implementation_ids: 2
};

ChainTypes.object_type = {
  "null": 0,
  base: 1,
  account: 2,
  asset: 3,
  witness: 4,
  limit_order: 5,
  custom: 6,
  proposal: 7,
  operation_history: 8,
  withdraw_permission: 9,
  vesting_balance: 10
};

ChainTypes.impl_object_type = {
    global_property: 0,
    dynamic_global_property: 1,
    reserved0: 2,      // formerly index_meta, TODO: delete me
    asset_dynamic_data_type: 3,
    account_balance: 4,
    account_statistics: 5,
    transaction: 6,
    block_summary: 7,
    account_transaction_history: 8,
    chain_property: 9,
    witness_schedule: 10,
    budget_record: 11,
    buyback: 12,
    buying: 13,
    content: 14,
    publisher: 15,
    rating: 16,
    seeding_statistics: 17
};




ChainTypes.vote_type = {
  committee: 0,
  witness: 1,
  worker: 2
};

ChainTypes.operations = {
  transfer: 0,
  limit_order_create: 1,
  limit_order_cancel: 2,
  call_order_update: 3,
  fill_order: 4,
  account_create: 5,
  account_update: 6,
  account_whitelist: 7,
  account_upgrade: 8,
  account_transfer: 9,
  asset_create: 10,
  asset_update: 11,
  asset_update_bitasset: 12,
  asset_update_feed_producers: 13,
  asset_issue: 14,
  asset_reserve: 15,
  asset_fund_fee_pool: 16,
  asset_settle: 17,
  asset_global_settle: 18,
  asset_publish_feed: 19,
  witness_create: 20,
  witness_update: 21,
  proposal_create: 22,
  proposal_update: 23,
  proposal_delete: 24,
  withdraw_permission_create: 25,
  withdraw_permission_update: 26,
  withdraw_permission_claim: 27,
  withdraw_permission_delete: 28,
  committee_member_create: 29,
  committee_member_update: 30,
  committee_member_update_global_parameters: 31,
  vesting_balance_create: 32,
  vesting_balance_withdraw: 33,
  worker_create: 34,
  custom: 35,
  assert: 36,
  balance_claim: 37,
  override_transfer: 38,
  transfer_to_blind: 39,
  blind_transfer: 40,
  transfer_from_blind: 41,
  asset_settle_cancel: 42,
  asset_claim_fees: 43
};

export default ChainTypes;
