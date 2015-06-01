# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table t_comm_link (
  id                        bigint auto_increment not null,
  user_id                   bigint,
  comm_user_id              bigint,
  constraint uq_t_comm_link_1 unique (id,user_id,comm_user_id),
  constraint pk_t_comm_link primary key (id))
;

create table t_companies (
  id                        bigint auto_increment not null,
  name                      varchar(255),
  constraint pk_t_companies primary key (id))
;

create table user (
  user_id                   bigint auto_increment not null,
  email                     varchar(255),
  password                  varchar(255),
  company_id                bigint,
  constraint pk_user primary key (user_id))
;

alter table t_comm_link add constraint fk_t_comm_link_user_comm_1 foreign key (user_id) references user (user_id) on delete restrict on update restrict;
create index ix_t_comm_link_user_comm_1 on t_comm_link (user_id);
alter table t_comm_link add constraint fk_t_comm_link_comm_with_user_2 foreign key (comm_user_id) references user (user_id) on delete restrict on update restrict;
create index ix_t_comm_link_comm_with_user_2 on t_comm_link (comm_user_id);
alter table user add constraint fk_user_company_3 foreign key (company_id) references t_companies (id) on delete restrict on update restrict;
create index ix_user_company_3 on user (company_id);



# --- !Downs

SET FOREIGN_KEY_CHECKS=0;

drop table t_comm_link;

drop table t_companies;

drop table user;

SET FOREIGN_KEY_CHECKS=1;

